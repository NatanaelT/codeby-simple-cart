export interface ICart {
  value: number;
  items: IItem[];
  totalizers?: Totalizer[];
  itemMetadata?: ItemMetadata;
}

interface ItemMetadata {
  items: Item2[];
}

interface Item2 {
  id: string;
  seller: string;
  name: string;
  skuName: string;
  productId: string;
  refId?: any;
  ean: string;
  imageUrl: string;
  detailUrl: string;
  assemblyOptions: any[];
}

interface Totalizer {
  id: string;
  name: string;
  value: number;
}

export interface IItem {
  uniqueId: string;
  id: string;
  productId: string;
  productRefId?: any;
  refId?: any;
  ean: string;
  name: string;
  skuName: string;
  modalType?: any;
  parentItemIndex?: any;
  parentAssemblyBinding?: any;
  assemblies: any[];
  priceValidUntil: string;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice?: any;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: AdditionalInfo;
  preSaleDate?: any;
  productCategoryIds: string;
  productCategories: ProductCategories;
  quantity: number;
  seller: string;
  sellerChain: string[];
  imageUrl: string;
  detailUrl: string;
  components: any[];
  bundleItems: any[];
  attachments: any[];
  attachmentOfferings: any[];
  offerings: any[];
  priceTags: PriceTag[];
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode?: any;
}

interface PriceTag {
  name: string;
  value: number;
  rawValue: number;
  isPercentual: boolean;
  identifier: string;
}

interface ProductCategories {
  '29': string;
}

interface AdditionalInfo {
  brandName: string;
  brandId: string;
  offeringInfo?: any;
  offeringType?: any;
  offeringTypeId?: any;
}