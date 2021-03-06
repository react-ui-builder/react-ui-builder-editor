/*
 *     React UI Builder
 *     Copyright (C) React UI Builder Team
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default [
  {
    type: 'component',
    props: {
      componentName: 'usr.components.dialogs.RenamePageDialog.RenamePageDialog',
      componentInstance: 'renamePageDialog1',
    },
    events: [
      {
        name: 'onSubmit',
        targets: [
          {
            type: 'userFunction',
            props: {
              functionName: 'usr.api.resourcesTreeViewMethods.renamePageSubmit',
            },
            events: [
              {
                name: 'isDialogOpen',
                targets: [
                  {
                    type: 'component',
                    props: {
                      componentName: 'usr.components.dialogs.RenamePageDialog.RenamePageDialog',
                      componentInstance: 'renamePageDialog1',
                      propertyName: 'isOpen'
                    }
                  }
                ]
              },
              {
                name: 'selectedResource',
                targets: [
                  {
                    type: 'component',
                    props: {
                      componentName: 'usr.components.panels.ResourcesTreeView.ResourcesTreeView',
                      componentInstance: 'resourcesTreeView1',
                      propertyName: 'selectedResource',
                    },
                  },
                ]
              },
              {
                name: 'selectedResourceKey',
                targets: [
                  {
                    type: 'component',
                    props: {
                      componentName: 'usr.components.panels.ResourcesTreeView.ResourcesTreeView',
                      componentInstance: 'resourcesTreeView1',
                      propertyName: 'selectedResourceKey',
                    },
                  },
                  {
                    type: 'userFunction',
                    props: {
                      functionName: 'usr.api.resourceEditorMethods.openTabWithResourceByKey'
                    },
                    events: [
                      {
                        name: 'activeEditorTabIndex',
                        targets: [
                          {
                            type: 'component',
                            props: {
                              componentName: 'usr.components.editor.ResourceEditor.ResourceEditor',
                              componentInstance: 'resourceEditor1',
                              propertyName: 'activeEditorTabIndex',
                            },
                          }
                        ]
                      },
                      {
                        name: 'resourceEditorTabs',
                        targets: [
                          {
                            type: 'component',
                            props: {
                              componentName: 'usr.components.editor.ResourceEditor.ResourceEditor',
                              componentInstance: 'resourceEditor1',
                              propertyName: 'resourceEditorTabs',
                            },
                          }
                        ]
                      },                    ]
                  },
                  {
                    type: 'userFunction',
                    props: {
                      functionName: 'usr.api.resourcesTreeViewMethods.updateResourcesTreeView'
                    },
                    events: [
                      {
                        name: 'resourcesTreeViewObject',
                        targets: [
                          {
                            type: 'component',
                            props: {
                              componentName: 'usr.components.panels.ResourcesTreeView.ResourcesTreeView',
                              componentInstance: 'resourcesTreeView1',
                              propertyName: 'resourcesTreeViewObject',
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'expandedResourceKeys',
                targets: [
                  {
                    type: 'component',
                    props: {
                      componentName: 'usr.components.panels.ResourcesTreeView.ResourcesTreeView',
                      componentInstance: 'resourcesTreeView1',
                      propertyName: 'expandedResourceKeys',
                    },
                  }
                ]
              },
              {
                name: 'resourceUpdatedSuccessfully',
                targets: [
                  {
                    type: 'userFunction',
                    props: {
                      functionName: 'usr.api.resourceEditorMethods.updateAllTabs'
                    },
                    events: [
                      {
                        name: 'resourceEditorTabs',
                        targets: [
                          {
                            type: 'component',
                            props: {
                              componentName: 'usr.components.editor.ResourceEditor.ResourceEditor',
                              componentInstance: 'resourceEditor1',
                              propertyName: 'resourceEditorTabs',
                            }
                          }
                        ]
                      }
                    ]
                  },
                ]
              },
              {
                name: 'fileObjects',
                targets: [
                  {
                    type: 'userFunction',
                    props: {
                      functionName: 'usr.api.mainWindowMessageMethods.writeEtcFiles'
                    },
                    events: [
                      {
                        name: 'exception',
                        targets: [
                          {
                            type: 'userFunction',
                            props: {
                              functionName: 'usr.api.appInitializationMethods.showErrorNotification'
                            },
                            events: [
                              {
                                name: 'notification',
                                targets: [
                                  {
                                    type: 'component',
                                    props: {
                                      componentName: 'usr.components.layouts.ProjectLayout.ProjectLayout',
                                      componentInstance: 'projectLayout1',
                                      propertyName: 'notification'
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'deleteFilePath',
                targets: [
                  {
                    type: 'userFunction',
                    props: {
                      functionName: 'usr.api.mainWindowMessageMethods.deleteEtcFile',
                    },
                    events: [
                      {
                        name: 'success',
                        targets: [
                          {
                            type: 'userFunction',
                            props: {
                              functionName: 'usr.api.mainWindowMessageMethods.removeResource',
                            },
                            events: [
                              {
                                name: 'success',
                                targets: [
                                  {
                                    type: 'userFunction',
                                    props: {
                                      functionName: 'usr.api.resourcesTreeViewMethods.updateResourcesTreeView'
                                    },
                                    events: [
                                      {
                                        name: 'resourcesTreeViewObject',
                                        targets: [
                                          {
                                            type: 'component',
                                            props: {
                                              componentName: 'usr.components.panels.ResourcesTreeView.ResourcesTreeView',
                                              componentInstance: 'resourcesTreeView1',
                                              propertyName: 'resourcesTreeViewObject',
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    type: 'userFunction',
                                    props: {
                                      functionName: 'usr.api.resourceEditorMethods.updateAllTabs'
                                    },
                                    events: [
                                      {
                                        name: 'resourceEditorTabs',
                                        targets: [
                                          {
                                            type: 'component',
                                            props: {
                                              componentName: 'usr.components.editor.ResourceEditor.ResourceEditor',
                                              componentInstance: 'resourceEditor1',
                                              propertyName: 'resourceEditorTabs',
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        name: 'activeEditorTabIndex',
                                        targets: [
                                          {
                                            type: 'component',
                                            props: {
                                              componentName: 'usr.components.editor.ResourceEditor.ResourceEditor',
                                              componentInstance: 'resourceEditor1',
                                              propertyName: 'activeEditorTabIndex',
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                ]
                              },
                            ]
                          }
                        ]
                      },
                      {
                        name: 'exception',
                        targets: [
                          {
                            type: 'userFunction',
                            props: {
                              functionName: 'usr.api.appInitializationMethods.showErrorNotification'
                            },
                            events: [
                              {
                                name: 'notification',
                                targets: [
                                  {
                                    type: 'component',
                                    props: {
                                      componentName: 'usr.components.layouts.ProjectLayout.ProjectLayout',
                                      componentInstance: 'projectLayout1',
                                      propertyName: 'notification'
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
              },
              {
                name: 'caughtException',
                targets: [
                  {
                    type: 'userFunction',
                    props: {
                      functionName: 'usr.api.appInitializationMethods.showErrorNotification'
                    },
                    events: [
                      {
                        name: 'notification',
                        targets: [
                          {
                            type: 'component',
                            props: {
                              componentName: 'usr.components.layouts.ProjectLayout.ProjectLayout',
                              componentInstance: 'projectLayout1',
                              propertyName: 'notification'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]