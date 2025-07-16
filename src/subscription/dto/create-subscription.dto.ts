export class CreateSubscriptionDto {
    user_id: number;
    plan_id: number;
    start_date: Date;
    end_date: Date;
    status: string;
}
