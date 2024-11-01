
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  type UnencryptedL2Log,
  type Wallet,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import ProfileContractArtifactJson from '../../target/zkpTestContract-Profile.json' assert { type: 'json' };
export const ProfileContractArtifact = loadContractArtifact(ProfileContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract Profile;
 */
export class ProfileContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, ProfileContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, ProfileContract.artifact, wallet) as Promise<ProfileContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, initial_supply: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) {
    return new DeployMethod<ProfileContract>(Fr.ZERO, wallet, ProfileContractArtifact, ProfileContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeysHash(publicKeysHash: Fr, wallet: Wallet, initial_supply: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) {
    return new DeployMethod<ProfileContract>(publicKeysHash, wallet, ProfileContractArtifact, ProfileContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof ProfileContract['methods']>(
    opts: { publicKeysHash?: Fr; method?: M; wallet: Wallet },
    ...args: Parameters<ProfileContract['methods'][M]>
  ) {
    return new DeployMethod<ProfileContract>(
      opts.publicKeysHash ?? Fr.ZERO,
      opts.wallet,
      ProfileContractArtifact,
      ProfileContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return ProfileContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'balances' | 'is_adult' | 'profile_nfts'> {
      return {
        balances: {
      slot: new Fr(1n),
    },
is_adult: {
      slot: new Fr(2n),
    },
profile_nfts: {
      slot: new Fr(3n),
    }
      } as ContractStorageLayout<'balances' | 'is_adult' | 'profile_nfts'>;
    }
    

  public static get notes(): ContractNotes<'ProfileNFT' | 'ValueNote'> {
    return {
      ProfileNFT: {
          id: new NoteSelector(4239572523),
        },
ValueNote: {
          id: new NoteSelector(1038582377),
        }
    } as ContractNotes<'ProfileNFT' | 'ValueNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(initial_supply: integer, owner: struct, outgoing_viewer: struct) */
    constructor: ((initial_supply: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_profile_nfts(owner: struct, page_index: integer) */
    get_profile_nfts: ((owner: AztecAddressLike, page_index: (bigint | number)) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** mint(amount: integer, owner: struct, outgoing_viewer: struct) */
    mint: ((amount: (bigint | number), owner: AztecAddressLike, outgoing_viewer: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** mintNFT(to: struct, token_id: field, is_adult: boolean) */
    mintNFT: ((to: AztecAddressLike, token_id: FieldLike, is_adult: boolean) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** update_is_adult(amount: integer, owner: struct, recipient: struct) */
    update_is_adult: ((amount: (bigint | number), owner: AztecAddressLike, recipient: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}