import { string } from 'prop-types';
import projectService from './index';

describe('projectService', () => {
  describe('getProjects()', () => {
    describe('when server try get the projects from DatoCMS', () => {
      describe('and succeed', () => {
        test('returning the all projects', async () => {
          //
          const query = `
                query{
                    allProjectItems(orderBy:id_ASC,locale: en){
                      projectTitle,
                      projectImage{
                        url,
                      },
                      projectDescription,
                      projectUrl,
                    }
                }`;
          const projects = [
            {
              projectTitle: string,
              projectImage: {},
              projectDescription: string,
              projectUrl: string,
            },
          ];
          const CMSGraphCLientModule = jest.fn(async () => ({
            allProjectItems: [
              {
                projectTitle: string,
                projectImage: {},
                projectDescription: string,
                projectUrl: string,
              },
            ],
          }));
          const response = await projectService.getProjects(
            'all',
            query,
            CMSGraphCLientModule,
          );
          expect(CMSGraphCLientModule).toHaveBeenCalledWith(query);
          expect(response).toEqual(projects);
        });
        test.only('returning the unique project', async () => {
          //
          const query = `
          query{
            projectItem(filter: {
              projectTitle: {
                eq: "instalura",
              }
            } ,locale: en){
              projectTitle,
              projectImage{
                url,
              },
              projectDescription,
              projectUrl,
            }
          }`;
          const projects = {
            title: string,
            image: {},
            description: string,
            link: string,
          };
          const CMSGraphCLientModule = jest.fn(async () => ({
            projectItem: {
              projectTitle: 'coisos',
              projectImage: {},
              projectDescription: string,
              projectUrl: string,
            },
          }));
          const response = await projectService.getProjects(
            'Item',
            query,
            CMSGraphCLientModule,
          );
          console.log(response);
          expect(CMSGraphCLientModule).toHaveBeenCalledWith(query);
          expect(response).toEqual(projects);
        });
      });
      describe('and fails', () => {
        test('returning the message error', async () => {
          const query = `
                query{
                }`;
          const projects = projectService.getProjects('ERROR', query);
          await expect(projects).resolves.toThrowError(
            'A valid type is required',
          );
        });
      });
    });
  });
  describe('getPaths()', () => {
    describe('when server try get the paths from DatoCMS', () => {
      describe('and succeed', () => {
        test('returning the paths', async () => {
          const query = `
                query {
                  allProjectItems {
                    projectTitle
                  }
                }`;
          const paths = [
            { params: { id: string } },
            { params: { id: string } },
            { params: { id: string } },
          ];
          const CMSGraphCLientModule = jest.fn(async () => ({
            allProjectItems: [
              { projectTitle: string },
              { projectTitle: string },
              { projectTitle: string },
            ],
          }));
          const response = await projectService.getPaths(
            query,
            CMSGraphCLientModule,
          );
          expect(CMSGraphCLientModule).toHaveBeenCalledWith(query);
          expect(response).toEqual(paths);
        });
      });
      describe('and fails', () => {
        test('not returning the paths', async () => {
          const query = `
                query {
                }`;
          const CMSGraphCLientModule = jest.fn(async () => ({
            allProjectItems: [],
          }));
          const reponse = await projectService.getPaths(
            query,
            CMSGraphCLientModule,
          );
          expect(CMSGraphCLientModule).toHaveBeenCalledWith(query);
          expect(reponse).toEqual([]);
        });
      });
    });
  });
});
