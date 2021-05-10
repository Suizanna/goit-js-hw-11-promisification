const delay = ms => {
  
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(ms);
            reject('error');
        }, ms)
    })
  };
  
  const logger = time => console.log(`Resolved after ${time}ms`);
  const errorCatch = error => console.log(error);
  
  // Вызовы функции для проверки
  delay(2000).then(logger).catch(errorCatch); // Resolved after 2000ms
  delay(1000).then(logger).catch(errorCatch); // Resolved after 1000ms
  delay(1500).then(logger).catch(errorCatch); // Resolved after 1500ms

