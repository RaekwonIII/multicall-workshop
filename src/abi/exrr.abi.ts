export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "symbol"
            },
            {
                "type": "string",
                "name": "defaultUri"
            }
        ]
    },
    {
        "type": "error",
        "name": "FragmentExceedsCollectionSupply",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentInvalid",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentInvalidSupply",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentLocked",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentNotFound",
        "inputs": [
            {
                "type": "uint256",
                "name": "fragment"
            }
        ]
    },
    {
        "type": "error",
        "name": "FragmentNotSequential",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentTokenSupplyExceeded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FragmentsTokenIdsNotSequential",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GameAssetFragmentTokenPoolSupplyExceeded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GameAssetInvalidFragment",
        "inputs": [
            {
                "type": "uint256",
                "name": "fragment"
            }
        ]
    },
    {
        "type": "error",
        "name": "GameAssetInvalidFragmentTokenId",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GameAssetReservedSupplyExceeded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GameAssetTokenAlreadyMinted",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ]
    },
    {
        "type": "error",
        "name": "GameAssetTokenDoesNotExist",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ]
    },
    {
        "type": "error",
        "name": "GameAssetTokenIdNotReserved",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GameAssetTokenIdReserved",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ]
    },
    {
        "type": "error",
        "name": "GameAssetZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "GameAssetZeroCount",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TokenPoolEmpty",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FragmentCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "supply",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FragmentExternalRendererSet",
        "inputs": [
            {
                "type": "uint256",
                "name": "fragment",
                "indexed": false
            },
            {
                "type": "address",
                "name": "renderContract",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FragmentMetadataLocked",
        "inputs": [
            {
                "type": "uint256",
                "name": "fragment",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FragmentMetadataUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "fragmentNumber",
                "indexed": false
            },
            {
                "type": "string",
                "name": "uri",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "GameAssetMinted",
        "inputs": [
            {
                "type": "address",
                "name": "recipient",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fragment",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "DEFAULT_ADMIN_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "FRAGMENT_CREATOR_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_SUPPLY",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "SYS_ADMIN_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "createFragment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "id"
            },
            {
                "type": "uint64",
                "name": "fragmentSupply"
            },
            {
                "type": "uint64",
                "name": "firstId"
            },
            {
                "type": "uint64",
                "name": "reserved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "fallbackURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "fragmentCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "fragmentExists",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "fragmentNumber"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "fragmentPoolTokenMatrix",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "fragments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": "status"
            },
            {
                "type": "uint8",
                "name": "locked"
            },
            {
                "type": "uint8",
                "name": "fragmentId"
            },
            {
                "type": "uint64",
                "name": "firstTokenId"
            },
            {
                "type": "uint64",
                "name": "supply"
            },
            {
                "type": "string",
                "name": "baseURI"
            },
            {
                "type": "address",
                "name": "renderer"
            },
            {
                "type": "tuple",
                "name": "reservedTokens",
                "components": [
                    {
                        "type": "uint64",
                        "name": "issuedCount"
                    },
                    {
                        "type": "uint64",
                        "name": "startId"
                    },
                    {
                        "type": "uint64",
                        "name": "supply"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "publicTokens",
                "components": [
                    {
                        "type": "uint64",
                        "name": "issuedCount"
                    },
                    {
                        "type": "uint64",
                        "name": "startId"
                    },
                    {
                        "type": "uint64",
                        "name": "supply"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "idToFragments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "lockFragmentMetadata",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "fragmentNumber"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mint",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint256",
                "name": "count"
            },
            {
                "type": "uint8",
                "name": "fragment"
            },
            {
                "type": "bytes32",
                "name": "seed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mintReserved",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint8",
                "name": "fragment"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "pause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "paused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRenderer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "fragmentNumber"
            },
            {
                "type": "address",
                "name": "renderContract"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenOfOwnerByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unpause",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateFragmentMetadata",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "fragmentNumber"
            },
            {
                "type": "string",
                "name": "baseURI_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "walletOfOwner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]"
            }
        ]
    }
]
