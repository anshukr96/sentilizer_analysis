let { promisify } = require('util');

let {PythonShell} = require('python-shell');

let python_shell_run = promisify(PythonShell.run);

export function sentilize(sentence){
    return new Promise(
        (resolve, reject) => {
            let options = {
                scriptPath: 'C:\Users\HP\Desktop\course_nodejs_reactjs\sentilizer_api',
                args: ['-s', '\*' + sentence + '\*'] 
            };

            python_shell_run('vader.py', options)
            .then(results => {
                let sentiment = results[0];
                let resp = {sentiment : 'Neutral'};
                if(sentiment === 'neg')
                    resp.sentiment = 'Negative';
                else if(sentiment === 'pos')  
                    resp.sentiment = 'Positive';  
                resolve(resp);    
            })
            .catch(error => {
                reject(error);
            });
        }
    );
}