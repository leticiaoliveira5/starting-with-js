// npm i node-schedule

const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * * * * *', function() {
  console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function() {
  task1.cancel()
  console.log('Cancelando a tarefa 1')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1, 5)]
rule.hour = 12
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
  console.log('Executando a tarefa 2', new Date().getSeconds())
})

// tendi foi nada