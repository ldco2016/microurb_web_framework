import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "NAME", age: 20 });

const root: Element = document.getElementById("root")!;

const userForm = new UserForm(root, user);

userForm.render();
