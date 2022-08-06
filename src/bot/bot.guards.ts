import { Injectable } from '@nestjs/common';
import { BotContext, GreetEvent } from './bot.interface';

@Injectable()
export class BotGuards {

  private isDefaultScene(context: BotContext, event: GreetEvent): boolean {
    return event.scene === 'default';
  }

  private isSpecialScene(context: BotContext, event: GreetEvent): boolean {
    return event.scene === 'special';
  }

  public getGuards() {
    return {
      isDefaultScene: this.isDefaultScene.bind(this),
      isSpecialScene: this.isSpecialScene.bind(this)
    };
  }
}
