export type TelegramMessage = {
    id: Id;
    created_at: string;
    updated_at: string;
    text: string;
    keyboard_link: string;
    parent: TelegramMessage | null;
    children: TelegramMessage[];
}
