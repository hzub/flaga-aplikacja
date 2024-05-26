import * as LDClient from "launchdarkly-js-client-sdk";

const LD_CLIENT_KEY = "664f1f1ae871790ff9ba562b";

const getPersistedKey = () => {
  const key = localStorage.getItem("ld-user-key");
  if (key) {
    return key;
  }
  const newKey = `user-${Math.random().toString(36).substring(2)}`;
  localStorage.setItem("ld-user-key", newKey);
  return newKey;
};

let client = null;

client = LDClient.initialize(LD_CLIENT_KEY, {
  kind: "user",
  key: getPersistedKey(),
});

export const getLDClient = () => client;
