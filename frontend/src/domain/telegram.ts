export type TelegramMessage = {
    id: Id;
    created_at: Date;
    updated_at: Date;
    text: string;
    keyboard_link: string;
    parent: TelegramMessage | null;
    children: TelegramMessage[];
}
