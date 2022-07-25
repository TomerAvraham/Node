function connectToDb() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("connect"), 3000);
  });
}

export default connectToDb;
