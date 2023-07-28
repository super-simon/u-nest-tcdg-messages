import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('list');
  }

  @Post()
  createMessage(@Body() body: createMessageDTO) {
    console.log(body);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
