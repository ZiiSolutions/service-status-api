import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, map, of } from 'rxjs';
import { ServiceStatusResponse } from './app-interfaces';
import { SERVICE_MAPPINGS } from './app-service-mappings';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getStatus(): Promise<ServiceStatusResponse[]> {
    const statusList = [];

    SERVICE_MAPPINGS.forEach((service) => {
      const { name, url } = service;
      const response = this.httpService.get(url).pipe(
        map((res) => ({ name, isHealthy: res.status === 200 })),
        catchError(() => of({ name, isHealthy: false })),
      );

      statusList.push(firstValueFrom(response));
    });

    return Promise.all(statusList);
  }
}
