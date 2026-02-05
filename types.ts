
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Red Teaming' | 'Blue Teaming' | 'Malware Analysis' | 'Cryptography' | 'Exploit Dev';
  tags: string[];
  imageUrl: string;
  content: string; // Detailed markdown-style content
}

export interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}
