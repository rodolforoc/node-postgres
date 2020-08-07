import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const existsTransaction = await transactionsRepository.findOne(id);

    if (!existsTransaction) {
      throw new AppError('Transaction id not found', 404);
    }

    await transactionsRepository.remove(existsTransaction);
  }
}

export default DeleteTransactionService;
