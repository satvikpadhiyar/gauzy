import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { Employee } from '../employee/employee.entity';
import { EmployeeService } from '../employee/employee.service';
import { OrganizationTeamEmployeeModule } from '../organization-team-employee/organization-team-employee.module';
import { Organization } from '../organization/organization.entity';
import { OrganizationService } from '../organization/organization.service';
import { Role } from '../role/role.entity';
import { RoleService } from '../role/role.service';
import { TenantModule } from '../tenant/tenant.module';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { OrganizationTeamController } from './organization-team.controller';
import { OrganizationTeam } from './organization-team.entity';
import { OrganizationTeamService } from './organization-team.service';

@Module({
	imports: [
		RouterModule.forRoutes([
			{ path: '/organization-team', module: OrganizationTeamModule }
		]),
		TypeOrmModule.forFeature([
			OrganizationTeam,
			Employee,
			User,
			Role,
			Organization
		]),
		OrganizationTeamEmployeeModule,
		TenantModule
	],
	controllers: [OrganizationTeamController],
	providers: [
		OrganizationTeamService,
		UserService,
		EmployeeService,
		RoleService,
		OrganizationService
	],
	exports: [OrganizationTeamService]
})
export class OrganizationTeamModule {}
