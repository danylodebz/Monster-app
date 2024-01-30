new Vue({
  el: '#app',
  data: {
    painel: true,
    lifePlayer: 100,
    lifeMonster: 100,
    logs: [],
  },
  methods: {
    randomAtackPlayer() {
      const value = this.getRandomNumber(6, 11);
      this.lifePlayer -= value;
      this.registerLog(`Jogador atacou Monstro com ${value}`, `player`)
    },
    randomAtackMonster() {
      const value = this.getRandomNumber(5, 10);
      this.lifeMonster -= value;
      this.registerLog(`Monstro atacou Jogador com ${value}`, `monster`)
    },
    especialAttackPlayer() {
      const value = this.getRandomNumber(7, 12);
      this.lifePlayer -= value;
      this.registerLog(`Jogador atacou Monstro com ${value}`, `player`)
    },
    especialAttackMonster() {
      const value = this.getRandomNumber(5, 10);
      this.lifeMonster -= value;
      this.registerLog(`Monstro atacou Jogador com ${value}`, `monster`)
    },
    healing() {
      const value = this.getRandomNumber(4,8);
      this.lifePlayer += value;
      const valueAttack = this.getRandomNumber(6,10);
      this.lifePlayer -= valueAttack
      this.registerLog(`Jogador ganhou força de ${value}`, `player`)
    },
    getRandomNumber(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    healEffect() {
      this.healing();
      this.randomAtackPlayer();
    },
    callFunctions() {
      this.randomAtackMonster();
      this.randomAtackPlayer();
    },
    callEspecialAttacks() {
      this.especialAttackPlayer();
      this.especialAttackMonster();
    },
    giveUp() {
      this.painel = !this.painel;
      this.lifeMonster = 100;
      this.lifePlayer = 100;
    },
    registerLog(text, cls){
      this.logs.unshift({text, cls})
    }
  },
  
});
