module.exports = {
  apps : [
    {
      name: "rt-webapp",
      script: "./index.js",
      watch: true,
      env: {
        "PORT": 3001,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 80,
        "NODE_ENV": "production",
      }
    }
  ]
}