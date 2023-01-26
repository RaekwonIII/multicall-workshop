import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './exrr.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    FragmentCreated: new LogEvent<([id: ethers.BigNumber, supply: ethers.BigNumber] & {id: ethers.BigNumber, supply: ethers.BigNumber})>(
        abi, '0x6fcf7a6630686870c1423ade47592d6c1bd8643c8302761a755063d7f1dd83f2'
    ),
    FragmentExternalRendererSet: new LogEvent<([fragment: ethers.BigNumber, renderContract: string] & {fragment: ethers.BigNumber, renderContract: string})>(
        abi, '0x295ab2938a368506a875623f3927a8554f55a26254ab5cf3029e505dae8792e8'
    ),
    FragmentMetadataLocked: new LogEvent<([fragment: ethers.BigNumber] & {fragment: ethers.BigNumber})>(
        abi, '0x21f57328d6c1c3c82eb90c80b82ef7b45c19f6a798efb1b7733e74f612fc2bf2'
    ),
    FragmentMetadataUpdated: new LogEvent<([fragmentNumber: ethers.BigNumber, uri: string] & {fragmentNumber: ethers.BigNumber, uri: string})>(
        abi, '0x366f182c538de512cbb1be2a2e99f2a3cc8baebdd7914c0020fa6843688b3eb1'
    ),
    GameAssetMinted: new LogEvent<([recipient: string, fragment: ethers.BigNumber, tokenId: ethers.BigNumber] & {recipient: string, fragment: ethers.BigNumber, tokenId: ethers.BigNumber})>(
        abi, '0x2c74708379268214c9af038c0ef1a87af017d7848b0da092e560aba9d86e8d19'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    FRAGMENT_CREATOR_ROLE: new Func<[], {}, string>(
        abi, '0xfc9e1f15'
    ),
    MAX_SUPPLY: new Func<[], {}, ethers.BigNumber>(
        abi, '0x32cb6b0c'
    ),
    SYS_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xf306ba30'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    createFragment: new Func<[id: number, fragmentSupply: ethers.BigNumber, firstId: ethers.BigNumber, reserved: ethers.BigNumber], {id: number, fragmentSupply: ethers.BigNumber, firstId: ethers.BigNumber, reserved: ethers.BigNumber}, []>(
        abi, '0xfe4132ec'
    ),
    fallbackURI: new Func<[], {}, string>(
        abi, '0x0c7d9752'
    ),
    fragmentCount: new Func<[], {}, ethers.BigNumber>(
        abi, '0x37469344'
    ),
    fragmentExists: new Func<[fragmentNumber: ethers.BigNumber], {fragmentNumber: ethers.BigNumber}, boolean>(
        abi, '0x1ceb0f37'
    ),
    fragmentPoolTokenMatrix: new Func<[_: ethers.BigNumber, _: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0xe8ad8851'
    ),
    fragments: new Func<[_: ethers.BigNumber], {}, ([status: number, locked: number, fragmentId: number, firstTokenId: ethers.BigNumber, supply: ethers.BigNumber, baseURI: string, renderer: string, reservedTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber}), publicTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber})] & {status: number, locked: number, fragmentId: number, firstTokenId: ethers.BigNumber, supply: ethers.BigNumber, baseURI: string, renderer: string, reservedTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber}), publicTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber})})>(
        abi, '0xff6e5334'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    idToFragments: new Func<[_: ethers.BigNumber], {}, ethers.BigNumber>(
        abi, '0x40f05d24'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    lockFragmentMetadata: new Func<[fragmentNumber: ethers.BigNumber], {fragmentNumber: ethers.BigNumber}, []>(
        abi, '0xdae99e2a'
    ),
    mint: new Func<[recipient: string, count: ethers.BigNumber, fragment: number, seed: string], {recipient: string, count: ethers.BigNumber, fragment: number, seed: string}, []>(
        abi, '0xf968dcc4'
    ),
    mintReserved: new Func<[recipient: string, tokenId: ethers.BigNumber, fragment: number], {recipient: string, tokenId: ethers.BigNumber, fragment: number}, []>(
        abi, '0xc2b7f6b9'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setRenderer: new Func<[fragmentNumber: ethers.BigNumber, renderContract: string], {fragmentNumber: ethers.BigNumber, renderContract: string}, []>(
        abi, '0x289c1566'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4f6ccce7'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: ethers.BigNumber], {owner: string, index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    updateFragmentMetadata: new Func<[fragmentNumber: ethers.BigNumber, baseURI_: string], {fragmentNumber: ethers.BigNumber, baseURI_: string}, []>(
        abi, '0x5b6f72bf'
    ),
    walletOfOwner: new Func<[_owner: string], {_owner: string}, Array<ethers.BigNumber>>(
        abi, '0x438b6300'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    FRAGMENT_CREATOR_ROLE(): Promise<string> {
        return this.eth_call(functions.FRAGMENT_CREATOR_ROLE, [])
    }

    MAX_SUPPLY(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.MAX_SUPPLY, [])
    }

    SYS_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.SYS_ADMIN_ROLE, [])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    fallbackURI(): Promise<string> {
        return this.eth_call(functions.fallbackURI, [])
    }

    fragmentCount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fragmentCount, [])
    }

    fragmentExists(fragmentNumber: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.fragmentExists, [fragmentNumber])
    }

    fragmentPoolTokenMatrix(arg0: ethers.BigNumber, arg1: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.fragmentPoolTokenMatrix, [arg0, arg1])
    }

    fragments(arg0: ethers.BigNumber): Promise<([status: number, locked: number, fragmentId: number, firstTokenId: ethers.BigNumber, supply: ethers.BigNumber, baseURI: string, renderer: string, reservedTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber}), publicTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber})] & {status: number, locked: number, fragmentId: number, firstTokenId: ethers.BigNumber, supply: ethers.BigNumber, baseURI: string, renderer: string, reservedTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber}), publicTokens: ([issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber] & {issuedCount: ethers.BigNumber, startId: ethers.BigNumber, supply: ethers.BigNumber})})> {
        return this.eth_call(functions.fragments, [arg0])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    idToFragments(arg0: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.idToFragments, [arg0])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenOfOwnerByIndex(owner: string, index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }

    walletOfOwner(_owner: string): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.walletOfOwner, [_owner])
    }
}
