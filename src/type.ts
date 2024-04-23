export type AuthInfo = {apiKey: string};
export type Settings = {
	selectedInsideCodeblock?: boolean
	codeblockWithLanguageId?: false
	pasteOnClick?: boolean
	keepConversation?: boolean
	timeoutLength?: number
	model?:
		| "gpt-3.5-turbo"
		| "gpt-3.5-turbo-1106"
		| "gpt-3.5-turbo-16k-1106"
		| "gpt-4"
		| "gpt-3.5-turbo-16k"
		| "gpt-4-turbo"
		| "gpt-4-0613"
		| "gpt-4-32k"
		| "gpt-4-32k-0613"
		| "custom"
	customModel?: string
	responseLanguage?: string
	apiUrl?: string
	temperature?: number
	maxTokens?: number
};

export type ConversationInfo = {
	parentMessageId: string
};
