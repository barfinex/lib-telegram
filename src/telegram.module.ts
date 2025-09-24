import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {
  TelegramModuleAsyncOptions,
  TelegramModuleOptions,
  TelegramOptionsFactory,
} from './interfaces/telegram-module-options.interface';
import { TELEGRAM_MODULE_OPTIONS } from './telegram.constants';
import { createTelegramProvider } from './telegram.provider';
import { TelegramService } from './telegram.service';

@Module({
  imports: [HttpModule],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {
  static forRoot(options: TelegramModuleOptions): DynamicModule {
    return {
      module: TelegramModule,
      providers: createTelegramProvider(options),
    };
  }

  static forRootAsync(options: TelegramModuleAsyncOptions): DynamicModule {
    return {
      module: TelegramModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
      exports: [TelegramService],
    };
  }

  private static createAsyncProviders(
    options: TelegramModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    if (options.useClass) {
      return [
        this.createAsyncOptionsProvider(options),
        {
          provide: options.useClass,
          useClass: options.useClass,
        },
      ];
    }

    throw new Error(
      'Invalid configuration: one of useExisting, useFactory, or useClass must be defined',
    );
  }

  private static createAsyncOptionsProvider(
    options: TelegramModuleAsyncOptions,
  ): Provider {

    if (options.useFactory) {
      return {
        provide: TELEGRAM_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    const inject: Type<TelegramOptionsFactory>[] = [];
    if (options.useExisting) {
      inject.push(options.useExisting);
    } else if (options.useClass) {
      inject.push(options.useClass);
    }

    return {
      provide: TELEGRAM_MODULE_OPTIONS,
      useFactory: async (optionsFactory: TelegramOptionsFactory) =>
        await optionsFactory.createTelegramOptions(),
      inject,
    };
  }
}
