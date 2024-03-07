/**
 * User model
 */
class User {
    constructor(data = {}) {
        this.id = null;
        this.username = null;
        this.name = null;
        this.password = null;
        this.token = null;
        this.status = null;
        this.creationTime;
        this.birthday;
        Object.assign(this, data);
    }
}

export default User;
