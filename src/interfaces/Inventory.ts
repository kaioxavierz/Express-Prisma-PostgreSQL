export interface IIventoryInterface {
    addProductToInventory(baseId: string, productId: string, quantity: number): Promise<void>;
    updateProductQuantity(baseId: string, productId: string, newQuantity: number): Promise<void>;
    removeProductFromInventory(baseId: string, productId: string): Promise<void>;
    getInventoryByBaseId(baseId: string): Promise<any[]>;
}