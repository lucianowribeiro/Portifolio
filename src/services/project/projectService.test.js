import projectService from './index';

// ok
const projectsFakeOK = [
  {
    name: 'name-fake',
    image: 'image-fake',
    title: 'title-fake',
    description: 'description-fake',
    link: 'link-fake',
    url: 'url-fake',
  },
  {
    name: 'meme',
    image: 'picture',
    title: 'head',
    description: 'data',
    link: 'path',
    url: 'src',
  },
];
const dataPageFakeOK = {
  name: 'name-fake',
  image: 'image-fake',
  title: 'title-fake',
  description: 'description-fake',
  link: 'link-fake',
  url: 'url-fake',
};
const paramsFakeOk = [
  { params: { id: 'name-fake' } },
  { params: { id: 'meme' } },
];
// fails
const projectsFakeFails = [
  {
    meme: 'meme-fake',
    picture: 'picture-fake',
    head: 'head-title',
    data: 'data',
    path: 'path',
    src: 'src',
  },
];
const paramsFakeFails = {
  params: { project: 'name' },
};
//
describe('projectService', () => {
  describe('forProjects()', () => {
    describe('when server try get the projects from db', () => {
      describe('and succeed', () => {
        test('returning the data', () => {
          //
          const params = paramsFakeOk.reduce((acc, param) => {
            if (param.params.id === 'name-fake') return param.params;
            return acc;
          }, {});
          const dataPage = projectService.forProjects(
            params,
            projectsFakeOK,
          );
          expect(dataPage).toEqual(dataPageFakeOK);
        });
      });
      describe('and fails', () => {
        test('not returning the data', () => {
          const dataPage = projectService.forProjects(
            paramsFakeFails,
            projectsFakeFails,
          );
          expect(dataPage).not.toEqual(dataPageFakeOK);
        });
      });
    });
  });
  describe('mapPaths()', () => {
    describe('when server try get the paths from db', () => {
      describe('and succeed', () => {
        test('returning the paths', () => {
          const params = projectService.mapPaths(projectsFakeOK);
          expect(params).toEqual(paramsFakeOk);
        });
      });
      describe('and fails', () => {
        test('not returning the paths', () => {
          //
          const params = projectService.mapPaths(projectsFakeFails);
          expect(params).not.toEqual(paramsFakeOk);
        });
      });
    });
  });
});
