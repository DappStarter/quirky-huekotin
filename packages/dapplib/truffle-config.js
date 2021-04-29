require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name reflect stereo pulp hunt person fortune gas'; 
let testAccounts = [
"0x09d227850eed1038b8d5fec46b4dafc0a0c35a77a9f3f5afd4154c90e6bbdb5c",
"0x5ba2e4aa38226bc49faf7d07689bc100be171a63e98355e100d11348c6a71045",
"0x41545d819455ee9b1b0b0308870032ad798fff2171d0d52124b3790df35ccca0",
"0xe6463c629b9944f5b56f6a6f2069107036942294cf80f38965f1befa52a35ac6",
"0x2e1d0344b95dbccbc945957e319a8e535d8898d6ebd2ac1245e997599cf67528",
"0x24d5486e001e63c01c7efcbca455e3d246903baa8d894a31ffba630a33b5c6e6",
"0x5748428f68b1a5b8ee23f490b13ecf68cf902777466a9854bfa733340ca2f6f0",
"0x8426429d8a463164189ebedbffde4f1b3ee4a8c6d7be6d963c54ffb3f1b971ee",
"0x34680c34d6e7baa998b8aabcfe539ceaa4b4bb416d16b76da4a0deca8aeb4dfe",
"0xf9b5216ebc3cbcd1fcea85e9490a0407fdedfc565fea429e7da1447a53a5aec9"
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
            version: '^0.5.11'
        }
    }
};
