//
//
import mongoose, { Schema, Model, Document } from "mongoose";
import bcrypt from "bcryptjs";
//
import { T } from "../../../__PKG__/X";
//
//
type UserDoc = Document &
    T.UserDat & {
        matchPassword(enteredPassword: string): Promise<boolean>;
    };
//
//
const schema = new Schema(
    {
        //
        //
        // +++++++++++++++++++++++++++
        email: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
        user_id: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
        password: {
            type: Schema.Types.String,
            required: true,
        },
        // +++++++++++++++++++++++++++
        //
        //
        enabled: {
            type: Schema.Types.Boolean,
            default: true,
        },
        mayRef: {
            type: Schema.Types.Boolean,
            default: false,
        },
    },
    {
        collection: "UserDat",
        timestamps: true,
    }
);
//
//
schema.pre("save", async function (next) {
    //
    //
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    //
    //
    if (!this.isNew) {
        return next();
    }
    //
    //
    const User = this.constructor as Model<UserDoc>;
    const existingUser = await User.findOne({
        $or: [{ email: this.email }, { user_id: this.user_id }],
    });
    //
    //
    if (existingUser) {
        const field = existingUser.email === this.email ? "email" : "alias";
        const error = new Error(`${field} already in use`);
        return next(error);
    }
    //
    //
    next();
});
schema.methods.toJSON = function () {
    var obj = this.toObject();
    //
    obj.id = obj._id;
    //
    delete obj._id;
    delete obj.__v;
    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.password;
    delete obj.email;
    //
    return obj;
};
schema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};
//
//
export default mongoose.model<UserDoc>("UserDat", schema);
