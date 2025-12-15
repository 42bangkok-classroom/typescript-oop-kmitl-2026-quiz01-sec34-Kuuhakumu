const light = process.argv[2];
switch (light.toUpperCase()) {
    case 'RED':
        console.log('Stop');
        break;
    case 'YELLOW':
        console.log('Caution');
        break;
    case 'GREEN':
        console.log('Go');
        break;
    default:
        console.log('Unknown');
        break;
}