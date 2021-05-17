'use strict';

module.exports = class {
    constructor(
        username,
        password,
        passwordPlain,
        userId,
        userGroup,
        status,
        userType
    ) {
        this.username = username;
        this.password = password;
        this.password_plain = passwordPlain;
        this.userid = userId;
        this.id_user_group = userGroup;
        this.status = status;
        this.user_type = userType;
    }
}