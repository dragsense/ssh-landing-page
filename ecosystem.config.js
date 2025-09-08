module.exports = {
  apps: [
    {
      name: "ssh-app",
      script: "serve",
      args: "-s dist -l 3000",
      env: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    demo: {
      user: "root",
      host: "66.103.211.113",
      ref: "origin/main",
      repo: "git@github.com:dragsense/ssh-landing-page.git",
      path: "/var/www/ssh_demo_web_usr/data/www/ssh-demo.websight.digital",
      key: "C:/Users/ranaa/.ssh/trainer-server",
      "post-setup": "",
      "post-deploy": "sh ./deploy.sh",
    },

   
  },
};
