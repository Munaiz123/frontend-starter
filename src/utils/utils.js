export const AWS_CONFIG = {
    region: process.env.NEXT_PUBLIC_REGION,
    accessKeyId: process.env.NEXT_PUBLIC_AWS_COGNITO_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_COGNITO_ACCESS_SECRET
}

export const SIGN_UP_OBJ = { // SignUpRequest
    ClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
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
    // ClientMetadata: { // ClientMetadataType
    //   "<key,value>": "pair",
    // },
  };

  export const CONFIRM_SIGN_UP_OBJ = { // Confirm SignUp Request
    ClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID, // required
    Username: "STRING_VALUE", // required
    ConfirmationCode: "STRING_VALUE", // required
    ForceAliasCreation: false, // default 
  };