import React from 'react';

import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import { formatPercentage } from 'common/format';
import STATISTIC_CATEGORY from 'interface/others/STATISTIC_CATEGORY';
import Statistic from 'interface/statistics/Statistic';
import BoringValueText from 'interface/statistics/components/BoringValueText';

import Analyzer from 'parser/core/Analyzer';
import Enemies from 'parser/shared/modules/Enemies';


class SymbolsOfDeathUptime extends Analyzer {
  static dependencies = {
    enemies: Enemies,
  };

  protected enemies!: Enemies;

  statistic() {
    const symbolsOfDeathUptime = this.selectedCombatant.getBuffUptime(SPELLS.SYMBOLS_OF_DEATH.id) / this.owner.fightDuration;
    return (
      <Statistic
        size="flexible"
        category={STATISTIC_CATEGORY.GENERAL}
      >
        <BoringValueText label={<><SpellIcon id={SPELLS.SYMBOLS_OF_DEATH.id} /> Symbols of Death Uptime</>}>
          {formatPercentage(symbolsOfDeathUptime)} %
          </BoringValueText>
      </Statistic>
    );
  }
}

export default SymbolsOfDeathUptime;
