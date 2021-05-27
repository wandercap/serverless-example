# Serverless Example

## Installation

Install serverless framework

```sh
npm install -g serverless
```

Install project dependencies

```sh
npm install
```

Add AWS Credentials

```sh
serverless config credentials --provider aws --key ABCD --secret 1234 --profile local -o
```

## Run local

1. Install localStack
   - <https://localstack.cloud/>
   - Config aws-credentials:
     `aws config`
     Access Key ID: local
     Secret Access Key: local
2. Config local credentials:
   `serverless config credentials --provider aws --key local --secret local --profile local -o`
3. Build AWS local stack:
   `export NODE_OPTIONS=--max_old_space_size=8192`
   `serverless deploy --aws-profile local`
