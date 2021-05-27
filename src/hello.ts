import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
  event: any,
  context: any,
): Promise<any> => {
  try {
    const result = {};

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    context.fail(
      {
        statusCode: error.statusCode || 500,
        body: JSON.stringify(error),
      }
    );
  }
};
