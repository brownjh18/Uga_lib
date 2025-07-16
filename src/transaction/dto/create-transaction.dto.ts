export class CreateTransactionDto {
    user_id: number;
    institution_id: number;
    amount: number;
    transaction_date: Date;
    status: string; 
    currency: string; // 'UGX'
}
