vet1 = [22,33];

function somaSucessor(vet2) {
    vet2[0] = vet2[0] + 1;
    vet1[1] = vet2[1] + 1;
}

somaSucessor(vet1)
console.log(vet1)