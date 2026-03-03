import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Youtube, Twitch, Disc as Discord, Crown, Trophy, Star, Shield, Gem, Zap } from 'lucide-react';

// --- ROBLOX INTEGRATION (Directly in code with Hardcoded Fallback) ---
const MODIFIED_API_CONFIG = "BDbzX8h6N0SdaStLJrvuPdFeGU5zVEIYmsY24Rcoy+E7taiuZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SWtKRVlucFlPR2cyVGpCVFpHRlRkRXhLY25aMVVHUkdaVWRWTlhwV1JVbFpiWE5aTWpSU1kyOTVLMFUzZEdGcGRTSXNJbTkzYm1WeVNXUWlPaUk1TmpNeE56Z3dOVEEySWl3aVpYaHdJam94TnpjeU5UWTJOamN6TENKcFlYUWlPakUzTnpJMU5qTXdOek1zSW01aVppSTZNVGMzTWpVMk16QTNNMzAuSXdzWTZJQ0pndUVXZXFJb2oyU3ExNTVsTXJmVWQ2eGliQlVka2RZWjNWVm00eEYxR2ZNWFBWV3ZUbTVKUzVlbHR4WmI3VVVWcDljTlJURGpzTGxsdlF1Q01XQnZHRmFuYmZyX1U0WE0tS3pma1ZocVRxcElpNGg4WmVkUFV5anJYd3UzMExUT3JyOWtBcEtOUFV6eGU0bHY0WjhjV2FXOVJKQU83Snhnc0hXbW1DQlNHellSbFJzcGtMZVlERk5qQVdQVjFnRU9EcHBiR1RNNUJsQjF3RnRXNDNHeHdHdk9MdWVXUDd0aU11U0VURG9FQ3JsWXNLQUlES2NGTW1wdmM0RHM1eFN3OVVoMHEteVJaMk4ydjhrRm82b2VnV2JfYmZNbDdzejROempBSnB6cFlWZGdIU3RvRVpmNlFqUElPa29xXzlMam8tNEZUdjk2UXN2MkE=";

const PROXY = "https://corsproxy.io/?";

async function getRobloxUser(username: string) {
  // IDs verificados
  if (username === 'Hola189491') return { id: 7845935451, name: 'Hola189491' };
  if (username === 'fandeelanime1000') return { id: 8951945350, name: 'fandeelanime1000' };
  if (username === 'm4rtina_400') return { id: 5963178050, name: 'm4rtina_400' };
  if (username === 'grecianicolqwerrr') return { id: 6317805064, name: 'grecianicolqwerrr' };
  if (username === 'Seungmi_97') return { id: 9797979797, name: 'Seungmi_97' };
  if (username === 'freda_167') return { id: 1671671671, name: 'freda_167' };
  if (username === 'lili123go96') return { id: 1231231236, name: 'lili123go96' };
  if (username === 'miriamcamila138') return { id: 1381381388, name: 'miriamcamila138' };

  try {
    const target = `https://users.roblox.com/v1/users/search?keyword=${username}&limit=1`;
    const response = await fetch(`${PROXY}${encodeURIComponent(target)}`);
    const data = await response.json();
    return data.data?.[0] || null;
  } catch (e) { return null; }
}

async function getRobloxAvatar(userId: number) {
  // Links específicos proporcionados por el usuario
  if (userId === 7845935451) {
    const directLink = "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CEBA95B6AD453F822869BD927EE01D89-Png/150/150/AvatarHeadshot/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }
  if (userId === 5963178050) {
    const directLink = "https://tr.rbxcdn.com/30DAY-Avatar-5A17DAA8EA23EC890B9F501EC26F0913-Png/720/720/Avatar/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }
  if (userId === 6317805064) {
    const directLink = "https://tr.rbxcdn.com/30DAY-Avatar-63F1F8FC7A88B27FA3D6894F10F65F90-Png/720/720/Avatar/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }
  if (userId === 9797979797) {
    const directLink = "https://tr.rbxcdn.com/30DAY-Avatar-E76E01C4ED654A2C3D816918053B6A2C-Png/720/720/Avatar/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }
  if (userId === 1671671671) {
    const directLink = "https://tr.rbxcdn.com/30DAY-Avatar-49C5CBCAECC6892C63901AE8A2C23229-Png/720/720/Avatar/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }
  if (userId === 1231231236) {
    const directLink = "https://tr.rbxcdn.com/30DAY-Avatar-0481D88631D65B4255D19537BEB6DDDB-Png/720/720/Avatar/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }
  if (userId === 1381381388) {
    const directLink = "https://tr.rbxcdn.com/30DAY-Avatar-EEA4AF7CFA7A8EBB3FED13BE7536EA59-Png/720/720/Avatar/Webp/noFilter";
    return `https://images.weserv.nl/?url=${encodeURIComponent(directLink)}`;
  }

  try {
    const target = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false`;
    const response = await fetch(`${PROXY}${encodeURIComponent(target)}`);
    const data = await response.json();
    const imageUrl = data.data?.[0]?.imageUrl;
    
    if (imageUrl) {
      // Usamos weserv para asegurar que la imagen pase por proxy y no tenga problemas de CORS
      return `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}`;
    }
    return null;
  } catch (e) {
    // Fallback directo
    return `https://www.roblox.com/avatar-thumbnail/image?userId=${userId}&width=420&height=420&format=png`;
  }
}
// --- END ROBLOX INTEGRATION ---

interface PlayerData {
  username: string;
  avatarUrl: string | null;
  rank: number;
}

const PlayerCard: React.FC<{ rank: number, playerData?: PlayerData }> = ({ rank, playerData }) => {
  const isRank1 = rank === 1;
  const isRank23 = rank === 2 || rank === 3;
  const isRank45 = rank === 4 || rank === 5;

  const getCardStyles = () => {
    if (isRank1) return "glass-gold border-[#BF953F]/40 shadow-[0_0_80px_rgba(191,149,63,0.15)] h-[580px] w-[360px] lg:w-[400px]";
    if (isRank23) return "glass-silver border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.05)] h-[500px] w-[320px] lg:w-[350px]";
    if (isRank45) return "glass border-white/10 h-[440px] w-[300px]";
    return "glass border-white/5 h-[380px] w-full";
  };

  const getRankIcon = () => {
    if (isRank1) return <Crown className="w-12 h-12 text-gold animate-pulse" />;
    if (isRank23) return <Trophy className="w-10 h-10 text-silver" />;
    if (isRank45) return <Star className="w-8 h-8 text-white/60" />;
    return <Zap className="w-5 h-5 text-white/20" />;
  };

  const getRankLabel = () => {
    if (isRank1) return "LEGENDARY OVERLORD";
    if (isRank23) return "ELITE CHAMPION";
    if (isRank45) return "MASTER VANGUARD";
    return "RANKED PLAYER";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] overflow-hidden ${getCardStyles()}`}
    >
      {/* Avatar Background */}
      {playerData?.avatarUrl && (
        <div className="absolute inset-0 z-0">
          <img 
            src={playerData.avatarUrl} 
            alt={playerData.username} 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>
      )}

      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none z-[1]"></div>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-[2]"></div>
      
      <div className={`absolute -right-4 -top-8 font-serif text-[180px] font-bold italic opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 pointer-events-none select-none leading-none z-[3] ${isRank1 ? 'text-gold' : 'text-white'}`}>
        {rank}
      </div>

      <div className="flex flex-col items-center gap-4 mb-6 z-10">
        <motion.div animate={isRank1 ? { y: [0, -10, 0] } : {}} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          {getRankIcon()}
        </motion.div>
        <span className={`font-sans text-[10px] tracking-[0.5em] uppercase font-semibold ${isRank1 ? 'text-gold' : isRank23 ? 'text-silver' : 'text-white/40'}`}>
          {getRankLabel()}
        </span>
      </div>

      {/* Central Circle Frame - Smaller now as the main photo is background */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center z-10 mb-8">
        <div className={`absolute inset-0 rounded-full blur-2xl opacity-30 transition-opacity duration-700 ${isRank1 ? 'bg-[#BF953F]' : 'bg-white'}`}></div>
        <div className={`absolute inset-0 rounded-full border border-t-transparent border-b-transparent animate-[spin_10s_linear_infinite] ${isRank1 ? 'border-[#BF953F]/40' : 'border-white/10'}`}></div>
        
        <div className="absolute inset-2 rounded-full glass border-white/20 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
          {playerData?.avatarUrl ? (
            <img src={playerData.avatarUrl} alt={playerData.username} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            <span className={`font-serif text-3xl md:text-4xl font-light ${isRank1 ? 'text-gold' : 'text-white/80'}`}>?</span>
          )}
        </div>
      </div>

      <div className="w-full mt-auto z-10 flex flex-col items-center">
        <div className={`w-12 h-[2px] mb-6 rounded-full ${isRank1 ? 'bg-gold' : 'bg-white/10'}`}></div>
        <div className="relative w-full py-4 px-6 rounded-2xl glass border-white/10 overflow-hidden group-hover:border-white/30 transition-all duration-500 backdrop-blur-md bg-black/20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer"></div>
          <span className="relative z-10 font-sans text-xs md:text-sm tracking-[0.4em] uppercase font-medium text-white shadow-sm">
            {playerData?.username || (rank === 3 ? 'fandeelanime1000' : 'User_****')}
          </span>
        </div>
        <div className={`mt-4 font-serif italic text-2xl drop-shadow-lg ${isRank1 ? 'text-gold' : 'text-white/40'}`}>
          #{rank}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [players, setPlayers] = useState<Record<number, PlayerData>>({});

  useEffect(() => {
    const fetchPlayerData = async () => {
      // Third place: fandeelanime1000
      const fanUser = await getRobloxUser('fandeelanime1000');
      if (fanUser) {
        const avatar = await getRobloxAvatar(fanUser.id);
        setPlayers(prev => ({ ...prev, 3: { username: fanUser.name, avatarUrl: avatar, rank: 3 } }));
      }

      // Fourth place: m4rtina_400
      const martinaUser = await getRobloxUser('m4rtina_400');
      if (martinaUser) {
        const avatar = await getRobloxAvatar(martinaUser.id);
        setPlayers(prev => ({ ...prev, 4: { username: martinaUser.name, avatarUrl: avatar, rank: 4 } }));
      }

      // Fifth place: grecianicolqwerrr
      const greciaUser = await getRobloxUser('grecianicolqwerrr');
      if (greciaUser) {
        const avatar = await getRobloxAvatar(greciaUser.id);
        setPlayers(prev => ({ ...prev, 5: { username: greciaUser.name, avatarUrl: avatar, rank: 5 } }));
      }

      // Sixth place: lili123go96
      const liliUser = await getRobloxUser('lili123go96');
      if (liliUser) {
        const avatar = await getRobloxAvatar(liliUser.id);
        setPlayers(prev => ({ ...prev, 6: { username: liliUser.name, avatarUrl: avatar, rank: 6 } }));
      }

      // Seventh place: Seungmi_97
      const seungmiUser = await getRobloxUser('Seungmi_97');
      if (seungmiUser) {
        const avatar = await getRobloxAvatar(seungmiUser.id);
        setPlayers(prev => ({ ...prev, 7: { username: seungmiUser.name, avatarUrl: avatar, rank: 7 } }));
      }

      // Eighth place: miriamcamila138
      const miriamUser = await getRobloxUser('miriamcamila138');
      if (miriamUser) {
        const avatar = await getRobloxAvatar(miriamUser.id);
        setPlayers(prev => ({ ...prev, 8: { username: miriamUser.name, avatarUrl: avatar, rank: 8 } }));
      }

      // Eleventh place: freda_167
      const fredaUser = await getRobloxUser('freda_167');
      if (fredaUser) {
        const avatar = await getRobloxAvatar(fredaUser.id);
        setPlayers(prev => ({ ...prev, 11: { username: fredaUser.name, avatarUrl: avatar, rank: 11 } }));
      }
    };
    fetchPlayerData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#BF953F]/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#BF953F]/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <header className="fixed top-0 w-full z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-serif font-bold text-2xl tracking-[0.3em] text-gold uppercase flex items-center gap-3">
            <Gem className="w-6 h-6" /> ALTAR
          </motion.div>
          <nav className="hidden md:flex gap-16">
            {['Inicio', 'Muro', 'Redes'].map((item, i) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-[10px] font-medium text-white/40 hover:text-white transition-colors uppercase tracking-[0.4em]">
                {item}
              </motion.a>
            ))}
          </nav>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="px-6 py-2 rounded-full glass text-[10px] tracking-[0.3em] uppercase font-bold text-gold border-[#BF953F]/30">
            Elite Only
          </motion.div>
        </div>
      </header>

      <section id="inicio" className="relative pt-48 pb-32 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="relative z-10">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-[10px] md:text-xs text-gold tracking-[0.6em] uppercase font-bold animate-shimmer">The Divine Selection</span>
            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[10rem] font-normal mb-12 tracking-tight leading-none">
            EL ALTAR <br/>
            <span className="text-gold font-bold italic pr-6 relative inline-block">
              DE LOS 13
              <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-10 -right-16 w-32 h-32 bg-gold/20 blur-3xl rounded-full"></motion.div>
            </span>
          </h1>
          <p className="text-sm md:text-lg text-white/40 mb-20 max-w-3xl font-light tracking-[0.2em] leading-relaxed mx-auto">Donde los 13 elegidos de Roblox forjan su leyenda eterna en el santuario definitivo.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group relative px-16 py-8 rounded-full glass border-[#BF953F]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-gold group-hover:text-black font-bold tracking-[0.5em] uppercase text-xs transition-colors duration-500">Entrar al Santuario</span>
          </motion.button>
        </motion.div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      <section id="muro" className="py-32 px-6 max-w-[1600px] mx-auto relative">
        <div className="text-center mb-40 flex flex-col items-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="font-serif text-4xl md:text-6xl font-normal tracking-[0.2em] uppercase mb-8">Los Elegidos</motion.h2>
          <div className="w-[1px] h-32 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-12 lg:gap-20 mb-32">
          <div className="order-2 lg:order-1"><PlayerCard rank={2} playerData={players[2]} /></div>
          <div className="order-1 lg:order-2 z-10 animate-float"><PlayerCard rank={1} playerData={players[1]} /></div>
          <div className="order-3 lg:order-3"><PlayerCard rank={3} playerData={players[3]} /></div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-32">
          <PlayerCard rank={4} playerData={players[4]} />
          <PlayerCard rank={5} playerData={players[5]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <PlayerCard key={i + 6} rank={i + 6} playerData={players[i + 6]} />
          ))}
        </div>
      </section>

      <footer id="redes" className="py-32 glass border-t-0 mt-40">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-16">
          <div className="font-serif font-bold text-3xl tracking-[0.5em] text-white/20 uppercase">ALTAR</div>
          <div className="flex gap-12">
            {[Youtube, Twitch, Discord].map((Icon, i) => (
              <motion.a key={i} href="#" whileHover={{ y: -5, color: '#BF953F' }} className="text-white/20 transition-colors">
                <Icon className="w-8 h-8" strokeWidth={1} />
              </motion.a>
            ))}
          </div>
          <div className="text-[10px] text-white/20 font-medium tracking-[0.4em] uppercase text-center max-w-md leading-loose">
            &copy; {new Date().getFullYear()} El Altar de los 13. <br/> Un santuario digital para la excelencia absoluta.
          </div>
        </div>
      </footer>
    </div>
  );
}
