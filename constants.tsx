
import React from 'react';
import { Project, Skill } from './types';
import { 
  Shield, 
  Terminal, 
  Lock, 
  Bug, 
  Search, 
  Code, 
  Cpu, 
  Zap, 
  Activity,
  Globe
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Norse-Gate Kernel Rootkit',
    description: 'A sophisticated Linux kernel module for stealthy persistence and privilege escalation testing.',
    category: 'Malware Analysis',
    tags: ['C', 'Kernel', 'Linux', 'Stealth'],
    imageUrl: 'https://picsum.photos/seed/rootkit/800/600',
    content: 'Developed a custom LKM that implements syscall hooking and process hiding. Designed to demonstrate the dangers of insecure kernel module loading and the importance of Secure Boot.'
  },
  {
    id: '2',
    title: 'Shadow-Net Scanner',
    description: 'Distributed network reconnaissance tool that bypasses traditional IDS/IPS using randomized traffic patterns.',
    category: 'Red Teaming',
    tags: ['Python', 'Network', 'IDS Bypassing'],
    imageUrl: 'https://picsum.photos/seed/scanner/800/600',
    content: 'A multi-agent scanning tool that coordinates port discovery across several dynamic IP addresses. Implements custom TCP fragmentation to evade signature-based detection.'
  },
  {
    id: '3',
    title: 'Enigma-III Cryptosuite',
    description: 'A library implementing Post-Quantum Cryptography algorithms for securing IoT device communications.',
    category: 'Cryptography',
    tags: ['Rust', 'IoT', 'PQC', 'Lattice-Based'],
    imageUrl: 'https://picsum.photos/seed/crypto/800/600',
    content: 'Focused on Kyber and Dilithium implementations optimized for ARM Cortex-M microcontrollers. Achieved 40% better performance than standard reference implementations.'
  },
  {
    id: '4',
    title: 'Vex-SOC Automator',
    description: 'Automated threat hunting and incident response orchestration layer for mid-sized SOC operations.',
    category: 'Blue Teaming',
    tags: ['Go', 'ELK', 'SOAR'],
    imageUrl: 'https://picsum.photos/seed/soc/800/600',
    content: 'Integration layer that connects SIEM alerts to automated firewall rules and sandboxed forensic collection triggers. Reduced Mean Time To Remediate (MTTR) by 60% in production tests.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Penetration Testing', level: 90, category: 'Offensive' },
  { name: 'Reverse Engineering', level: 85, category: 'Malware' },
  { name: 'Incident Response', level: 75, category: 'Defensive' },
  { name: 'Secure Coding (Rust/C++)', level: 80, category: 'Development' },
  { name: 'Cloud Security (AWS)', level: 70, category: 'Architecture' },
  { name: 'Cryptography', level: 65, category: 'Theory' }
];

export const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Red Teaming': <Terminal className="w-5 h-5" />,
  'Blue Teaming': <Shield className="w-5 h-5" />,
  'Malware Analysis': <Bug className="w-5 h-5" />,
  'Cryptography': <Lock className="w-5 h-5" />,
  'Exploit Dev': <Cpu className="w-5 h-5" />
};
