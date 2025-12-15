//*
//**
//***
//****
//*****
const input = process.argv[2];
for (let i = 1; i <= Number(input); i++) {
    console.log('\n');
    for (let j = 1; j <= i; j++) {
        console.log('*');
    }
}