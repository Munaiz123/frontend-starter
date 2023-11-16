export const AWS_CONFIG = {
    region: process.env.REGION,
    accessKeyId: process.env.AWS_COGNITO_ACCESS_KEY,
    secretAccessKey: process.env.AWS_COGNITO_ACCESS_SECRET
}

export const USER_POOL_CLIENT_ID = process.env.USER_POOL_CLIENT_ID


export const input = { // SignUpRequest
    ClientId: "STRING_VALUE", 
    // SecretHash: "STRING_VALUE",
    Username: "userName", // required
    Password: "userPass", // required
    UserAttributes: [ // AttributeListType
      { // AttributeType
        Name: "name", // required
        Value: "user_name",
      },
      { // AttributeType
        Name: "email", // required
        Value: "user_email",
      }
    ],
    ValidationData: [
      {
        Name: "STRING_VALUE", // required
        Value: "STRING_VALUE",
      }
    ],
    ClientMetadata: { // ClientMetadataType
      "<key,value>": "pair",
    },
  };