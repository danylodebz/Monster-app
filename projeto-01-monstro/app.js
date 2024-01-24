new Vue({
    el: '#app',
    data: {
      painel: true,
      listPoints: ['o jogador perdeu 10', 'o monstro perdeu 6'],
      lifeWidthPlayer: '100%',
      lifeWidthMonster: '100%',
      lifePlayer: 100,
      lifeMonster: 100,
      attackHistoryPlayer: [],
      attackHistoryMonster: [],
    },
    methods: {
      randomAtackPlayer() {
        var randomNumberPlayer = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        this.lifeWidthPlayer = `calc(${this.lifeWidthPlayer} - ${randomNumberPlayer}%)`;
        this.lifePlayer = this.lifePlayer - randomNumberPlayer;
        this.attackHistoryPlayer.push(randomNumberPlayer);
        
      },
      randomAtackMonster() {
        var randomNumberMonster = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
        this.lifeWidthMonster = `calc(${this.lifeWidthMonster} - ${randomNumberMonster}%)`;
        this.lifeMonster = this.lifeMonster - randomNumberMonster;
        this.attackHistoryMonster.push(randomNumberMonster);
      },
      especialAttackPlayer(){
        var especialAttackNumber = Math.floor(Math.random() * (9 - 5 + 1) + 5 );
        this.lifeWidthPlayer = `calc(${this.lifeWidthPlayer} - ${especialAttackNumber}%)`;
        this.lifePlayer = this.lifePlayer - especialAttackNumber;
        this.attackHistoryPlayer.push(especialAttackNumber);
      },
      especialAttackMonster(){
        var especialAttackNumber = Math.floor(Math.random() * (11 - 6 + 1) + 6 );
        this.lifeWidthMonster = `calc(${this.lifeWidthMonster} - ${especialAttackNumber}%)`;
        this.lifeMonster = this.lifeMonster - especialAttackNumber;
        this.attackHistoryPlayer.push(especialAttackNumber);
      },
      callFunctions() {
        this.randomAtackMonster();
        this.randomAtackPlayer();
      },
      callEspecialAttacks(){
        this.especialAttackPlayer();
        this.especialAttackMonster();
      },
      giveUp() {
        this.painel = !this.painel;
        this.lifeWidthMonster = '100%';
        this.lifeWidthPlayer = '100%';
        this.attackHistoryMonster = [];
        this.attackHistoryPlayer = [];
        this.lifeMonster = 100;
        this.lifePlayer = 100;
      },
    },
    computed: {
      combinedList() {
        return this.attackHistoryPlayer.map((player, index) => {
          return { player, monster: this.attackHistoryMonster[index] };
        });
      },
    },
  });
  