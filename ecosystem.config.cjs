// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "ssh-app-staging",
      script: "server.js",
      cwd: "/var/www/sajadhaider__usr/data/www/sajadhaider.com/staging/current",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "500M",
      error_file: "./logs/staging-err.log",
      out_file: "./logs/staging-out.log",
    },
    {
      name: "ssh-app-prod",
      script: "server.js",
      cwd: "/var/www/sajadhaider__usr/data/www/sajadhaider.com/current",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "500M",
      error_file: "./logs/prod-err.log",
      out_file: "./logs/prod-out.log",
    },
  ],

  deploy: {
    staging: {
      user: "root",
      host: "66.103.211.113",
      ref: "origin/main",
      repo: "git@github.com:dragsense/ssh-landing-page.git",
      path: "/var/www/sajadhaider__usr/data/www/sajadhaider.com/staging",
      key: "C:/.ssh/ds-server",
      "post-setup": "",
      "post-deploy": "sh ./deploy-staging.sh",
    },
    prod: {
      user: "root",
      host: "66.103.211.113",
      ref: "origin/main",
      repo: "git@github.com:dragsense/ssh-landing-page.git",
      path: "/var/www/sajadhaider__usr/data/www/sajadhaider.com",
      key: "C:/.ssh/ds-server",
      "post-setup": "",
      "post-deploy": "sh ./deploy-prod.sh",
    },
  },
};
