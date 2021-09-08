import { UserForm } from "./views/UserForm";

const root: Element = document.getElementById("root")!;

const userForm = new UserForm(root);

userForm.render();
