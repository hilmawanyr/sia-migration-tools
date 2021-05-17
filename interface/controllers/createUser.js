const { Worker, isMainThread, parentPort } = require('worker_threads');
const crypto = require('crypto');
const { APP_KEY } = require('../../infrastructure/config/constant');

const getStudent = require('../../app/use_cases/getStudent');
const StudentRepo = require('../../infrastructure/repositories/studentRepo');
const getLecturer = require('../../app/use_cases/getLecturer');
const LecturerRepo = require('../../infrastructure/repositories/lecturerRepo');

const User = require('../../domain/userLogin');
const CreateUser = require('../../app/use_cases/createUser');
const UserLogin = require('../../infrastructure/repositories/userloginRepo');

if (isMainThread) {
    module.exports = {

        async createStudentUser(req, res) {
            let studentrepo = new StudentRepo();
            
            // get students
            let student = await getStudent(studentrepo.getStudent);
            student = JSON.stringify(student);
    
            // treatment
            const worker = new Worker(__filename);
            worker.on('message', async students => {
                await CreateUser(students, new UserLogin().storeUser);
                return res.status(200).json({
                    code: '101',
                    status: 'success',
                    message: 'users successfully created. total users: ' + students.length,
                });
            });
            worker.postMessage({
                userid: student,
                usergroup: 5,
                status: 1,
                usertype: 2
            });
        },

        async createLecturerUser(req, res) {
            let lecturerRepo = new LecturerRepo();

            // get lecturer
            let lecturer = await getLecturer(lecturerRepo.getLecturer);
            lecturer = JSON.stringify(lecturer);

            // treatment
            const worker = new Worker(__filename);
            worker.on('message', async lecturers => {
                await CreateUser(lecturers, new UserLogin().storeUser);
                return res.status(200).json({
                    code: '101',
                    status: 'success',
                    message: 'users successfully created. total users: ' + lecturers.length,
                });
            });
            worker.postMessage({
                userid: lecturer,
                usergroup: 7,
                status: 1,
                usertype: 1
            });
        }
    
    }
} else {
    parentPort.on('message', msg => {
        let usersBuffer = [];
        let parseMsg = JSON.parse(msg.userid);
        parseMsg.forEach(data => {
            const userid = data.userid;
            const md5 = crypto.createHash('md5');
            const md5Hash = md5.update(userid, 'utf-8').digest('hex');

            const sha1 = crypto.createHash('sha1');
            const sha1Hash = sha1.update(md5Hash + APP_KEY, 'utf-8').digest('hex');

            const setUserObj = new User(userid, sha1Hash, userid, userid, msg.usergroup, msg.status, msg.usertype);
            usersBuffer.push(setUserObj);
        });
        parentPort.postMessage(usersBuffer);
    })
}