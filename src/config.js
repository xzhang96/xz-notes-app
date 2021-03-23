const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "xz-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qc2zis6po1.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jLnCbqEbN",
    APP_CLIENT_ID: "7l1pmp5e26b9931auhhobfferg",
    IDENTITY_POOL_ID: "us-east-1:db6dfd19-ec0c-4f15-9dcc-10205f434f54",
  },
};

export default config;