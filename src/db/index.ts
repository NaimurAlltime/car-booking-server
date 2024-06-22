import { User } from "../modules/user/user.model";
//pass: Naimur12345
const superAdminInfo = {
  email: "naimur@gmail.com",
  password: "$2y$10$LDfD0eogy./v24PKbLXZpOfk4W8nA78GlFvnLTBGxGeneWHamu12W",
};

const seedSuperAdmin = async () => {
  // check is super admin is exists
  const superAdmin = await User.findOne({ email: "naimur@gmail.com" });

  if (!superAdmin) {
    await User.create(superAdminInfo);
  }
};

export default seedSuperAdmin;
