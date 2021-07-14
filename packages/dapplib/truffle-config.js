require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember solid grace neck flock swift'; 
let testAccounts = [
"0x5361c372bf6c52e6f8a6caa8023d47ce11135b872f052ca55652ed51787df6b7",
"0x637e112a978141b609ba23cc63bd6ac2dc2ee9dc14f8cae8f9f1cd5b019ef133",
"0x0f780c030c35bfb23f5d5c6778cb2600cd14d3e08b177b0fa925e729bf9fe599",
"0xc0839f478dd4be7ac52dc4152b8e70d06a13ff856bc1618e016f8907bbe39cde",
"0xe0238d6068794e526fbc10b89654edbd614d5bf73e0fdf497f20b03c31341f63",
"0x8ecc5b574789670ef12a7a61d9326215c7b3ac595966b603634d6f61083b97ac",
"0xf2610bf30da37d348c7d7b3473b3990517251d39baca4822fb7053d88fc02a0d",
"0xb761309045270ea255a9de86a963b4f5d47addae6945b0453a1f3bb7462bed53",
"0x9dcf7d24ee96a5c83ce78dc5d9d212d77c1476ff7dba571d5ea010eae8d16ea3",
"0xd86478b96ecc6eceee049e1b9480fa6e6a516f4d617a1e4204388142e5801c07"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

