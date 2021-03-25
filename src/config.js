const config = {
  STRIPE_KEY: "pk_test_51ITcRUIMDEIzwFnYqq1GxOGEkTeNLJfmhR9UllxbIJHTlYzpFrhovRxuo7rN9EKhjNFu79nisSAwqtdK9OSXmyVR00aKlLzuMv",
  MAX_ATTACHMENT_SIZE: 5000000,
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
    IDENTITY_POOL_ID: "us-east-1:084589fd-94ac-4c31-99ef-4695d4d56b0e",
  },
};

export default config;