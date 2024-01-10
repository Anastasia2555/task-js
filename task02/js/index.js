// Входные данные
let electricityCostPerKWh = parseFloat(prompt('Введите стоимость электроэнергии за 1 кВт⋅ч в гривнах:'));
let monthlyKilometers = parseFloat(prompt('Введите количество километров, пройденных за месяц:'));
let costPerKilometer = parseFloat(prompt('Введите стоимость одного километра поездки в гривнах:'));
let numberOfBreadLoaves = parseInt(prompt('Введите количество кусков хлеба, купленных за месяц:'));
let costPerBreadLoaf = parseFloat(prompt('Введите стоимость одного куска хлеба в гривнах:'));

// Расчеты
let electricityCost = electricityCostPerKWh * 100; // Переводим в копейки
let travelCost = monthlyKilometers * costPerKilometer;
let totalBreadCost = numberOfBreadLoaves * costPerBreadLoaf;

// Общий результат
let totalCost = electricityCost + travelCost + totalBreadCost;

// Вывод результата
alert(`Общая стоимость: ${totalCost.toFixed(2)} грн`);
