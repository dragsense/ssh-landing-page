// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "ssh-app-staging",
      script: "npx",
      args: ["serve", "-s", "dist", "-l", "3001"],
      cwd: "/var/www/sajadhaider.com/data/www/sajadhaider.com/staging/current",
      env: {
        NODE_ENV: "staging",
      },
    },
    {
      name: "ssh-app-prod",
      script: "npx",
      args: ["serve", "-s", "dist", "-l", "3002"],
      cwd: "/var/www/sajadhaider.com/data/www/sajadhaider.com/current",
      env: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    staging: {
      user: "root",
      host: "66.103.211.113",
      ref: "origin/main",
      repo: "git@github.com:dragsense/ssh-landing-page.git",
      path: "/var/www/sajadhaider.com/data/www/sajadhaider.com/staging",
      key: "C:/.ssh/ds-server",
      "post-setup": "",
      "post-deploy": "sh ./deploy-staging.sh",
    },
    prod: {
      user: "root",
      host: "66.103.211.113",
      ref: "origin/main",
      repo: "git@github.com:dragsense/ssh-landing-page.git",
      path: "/var/www/sajadhaider.com/data/www/sajadhaider.com",
      key: "C:/.ssh/ds-server",
      "post-setup": "",
      "post-deploy": "sh ./deploy-prod.sh",
    },
  },
};
