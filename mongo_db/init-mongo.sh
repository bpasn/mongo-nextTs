mongo -- "nextdb" <<EOF
    var rootUser = "root";
    var rootPassword = "root";
    var admin = db.getSiblingDB("admin");
    admin.auth("root", "123456");

    db.createUser({
      user: "nextjs",
      pwd: "P@ssw0rd",
      roles: ["readWrite"]
    });
EOF<<
